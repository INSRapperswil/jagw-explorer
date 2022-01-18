import * as React from 'react';

export interface PopupProps {
  openPopup: (popup: React.ReactNode) => void;
  closePopup: () => void;
}

interface PopupState {
  popup: React.ReactNode | null;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function withPopup<P extends object>(
  WrappedComponent: React.ComponentType<P & PopupProps>,
) {
  return class ComponentWithPopup extends React.Component<P, PopupState> {
    public state: PopupState = {
      popup: null,
    };

    private openPopup(popup: React.ReactNode): void {
      this.setState({ popup });
    }

    private closePopup(): void {
      this.setState({ popup: null });
    }

    public render(): React.ReactNode {
      const { popup } = this.state;
      return (
        <>
          <WrappedComponent
            {...(this.props as P)}
            openPopup={(newPopup) => this.openPopup(newPopup)}
            closePopup={() => this.closePopup()}
          />
          {popup}
        </>
      );
    }
  };
}
