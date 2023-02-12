import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'


function Navbar() {

  const dispatch = useDispatch()
  const search = useSelector(selectSearch)

  const {pathname} = useLocation()

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            {pathname === '/' && <input type="text" value={search} onChange = {e => dispatch(toggleSearch(e.target.value))} className="search-box" placeholder="Search"/>}
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLepr7Ln6erg4uPJzc/T1ti7wMO2u77DyMqzuLvq7O3P0tTW2dvc3+DZ3N7ueM45AAAC2UlEQVR4nO2a2ZLjIAxFAYHZvPz/3za2O8v0JCA5kl3dxXly5eXeCAmDZKU6nU6n0+l0Op1O5/cCAErZglofzle3UwxJryTvFnWuB4DJa2P0DWNSnM+zAHnUD/G7Cb/kc/Tz9EJ+t3DKQkB8Lb8xiDsAFSr62jhhB2BTRX51EEUdgK3Lb4kg6qDx/6VjAL6tXxyMUg7A1fLvyYHQngQLTr/szUIGAlJfqBhhxAagIKCvAC+vtUQIBkIAtOE3kNEZsBkQKEVKALQO3AZIKbiGwHIbQG2CTwbYX8w0fa253wgzbQVKEvDqA6kIN5gNIN9DT8y8BiJVXy8XGzATrwFiFa51+McMXL4Elyfh1WVIOw1s8OorS96K/9rL6PLXMfVAorkPJApoBvivqLQ1MBP/oRR9MdsQuBcA4mp+D4DI3WwihEDkdorPAv4j8U67P/ONVJcGvRdYqRZJ9hgHEiV4A9OjkGsRbVTblJu+dKuy4UBcvxRjtVUr3ywup7P38uGUoQHM74Lgzprd5OVFJpgoVv6vLMzu35FNGE+eGq1TqzH6kFIKPg7XDM4y3Mhnz8zK/7XLMLq44cZhmfdfTxDPah5jKKu+ck+B9TlFNynRYKzDSheek+9nIWiT4mBlIlGCPnj9ZmD3bMLo4Gb2kthHpS3xhwk/sFoA5RLxXmLKvsQ1SAVbG1VWPISFIwpF/oj6bsEzWHg1pyZYiJ/lQl6oa/+fAz1+kAr52OL/sJCOBgHm5gEQybFjEgw86nrLBDqZ3herOPDkRKh+pnDAAXV8wKyvqQMMfn2aA9b1fzhA5wFQWhF48N9WkLuiWAfY/YA0pCWBamAfaIyjQTWQ0Y2YA2B6B5k8nCHRDgB5REqi3T6gT6eINNdANADtUpQsgR3fCIDcHnCjPkiQ2gQf1NfgwJSeTPVscmA+SSbVVgD/tdYHVJOAMJQ4TG2ma78bD6LwjtU7nU6n8/v5AuY6HZyRatEhAAAAAElFTkSuQmCC'} className="icon user-profile" /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar