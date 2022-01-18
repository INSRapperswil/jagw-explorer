import './SearchBar.scss';

type SearchBarProps = {
  onChange: (newValue: string) => void;
  currentValue: string;
};

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { currentValue, onChange } = props;

  return (
    <div className="SearchBar">
      <div className="SearchBar-Title">Search</div>
      <input
        className="SearchBar-Input"
        type="search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        value={currentValue}
      />
    </div>
  );
};

export default SearchBar;
