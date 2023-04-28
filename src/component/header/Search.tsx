import React from 'react';
import {Search as SearchIcon} from 'tabler-icons-react';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {grey} from "@mui/material/colors";
import {useAppDispatch, useAppSelector} from "hooks/hook";
import {changeSearch, selectSearch} from "stores/postsSlice";


type propsType = {}

const SearchBox = styled('div')(({theme}) => ({
 position: 'relative',
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.common.white, 0.15),
 '&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginRight: theme.spacing(2),
 marginLeft: 0,
 width: '100%',
 [theme.breakpoints.up('sm')]: {
  marginLeft: theme.spacing(3),
  width: 'auto',
 },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
 padding: theme.spacing(0, 2),
 height: '100%',
 position: 'absolute',
 pointerEvents: 'none',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
 color: 'inherit',
 '& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
   width: '20ch',
  },
 },
}));
const Search: React.FC<propsType> = () => {
 const dispatch = useAppDispatch();
 const searchValue = useAppSelector(selectSearch)
 const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  dispatch(changeSearch({search: event.target.value}));
 }
 return (
     <SearchBox>
      <SearchIconWrapper>
       <SearchIcon
           size={24}
           strokeWidth={2}
           color={grey[300]}
       />
      </SearchIconWrapper>
      <StyledInputBase
          placeholder="Search…"
          inputProps={{'aria-label': 'search'}}
          onChange={changeHandler}
          value={searchValue}
      />
     </SearchBox>
 );
};

export default Search;