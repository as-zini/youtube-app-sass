import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'
import { BiArrowBack } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import { SearchContext } from '../../context/SearchContext'
import useWindowSize from '../../helpers/useWindowSize'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'

const NavigationBar = () => {
  
  const {searchQuery, setSearchQuery, showSpecialSearchBar , setShowSpecialSearchBar} = useContext(SearchContext)
  const {width} = useWindowSize();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(searchQuery.input !== ''){
      const response = await axios.get(
      `/search?part=snippet&maxResults=10&q=${searchQuery.input}`
      );
      console.log(response.data.items);
      setSearchQuery(
      {
        ...searchQuery,
        videos: response.data.items
      }
      )
      navigate(`/results/${searchQuery.input}`)
    }
  }

  const specialSearchBarRender = (
    <div className='special_searchbar'>
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25}/>
      </button>
      <form onSubmit={handleSubmit}>
        <input value={searchQuery.input} onChange={handleChange} type='text' name='search' pattern='Search'/>
        <button type='submit'>
          <ImSearch size={20}/>
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} />
      </button>
    </div>

  )

  return (
    <nav className='Navbar'>
      {width <= 640 && showSpecialSearchBar ?
      specialSearchBarRender
      :   
      <>
      <LeftNav/>
        <SearchBar onChange={handleChange} onSubmit={handleSubmit}/>
        <RightNav/>
      </>
      }
    </nav>
  )
}

export default NavigationBar