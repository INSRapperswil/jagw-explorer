import './MenuItem.scss';

type MenuItemProps = {
  name: string;
  url: string;
};

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { name, url } = props;
  return (
    <div className="MenuItem">
      <a href={url}>{name}</a>
    </div>
  );
};

export default MenuItem;
