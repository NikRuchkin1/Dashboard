import React from 'react'
import { getCurrentUser } from '../redux/action/user'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Loader } from "@googlemaps/js-api-loader"

function Albums(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        let userID = +props.match.params.id;
        if (!userID) {
            userID = 0;
        }
        dispatch(getCurrentUser(userID))
    }, []);
    const currentUser = useSelector(({userReducer}) => userReducer.currentUser)
    const loader = new Loader({
        apiKey: "YOUR_API_KEY",
        version: "weekly",
        ...additionalOptions,
      });
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
      
    return (
        <div>
            <div id='map'></div>
            <div className='userInfo'>
                {currentUser.name}
            </div>
            <div className='userInfo'>
                {currentUser.username}
            </div>
            <div className='userInfo'>
                {currentUser.email}
            </div>
            <div className='userInfo'>
                {currentUser.phone}
            </div>
            <div className='userInfo'>
                {currentUser.website}
            </div>
            <div className='userInfo'>
                {currentUser.company.name}
            </div>
            <div className='userInfo'>
                {currentUser.company.catchPhrase}
            </div>
            <div className='userInfo'>
                {currentUser.company.bs}
            </div>
        </div>
    )
}

const AlbumsRouter = withRouter(Albums);
export default AlbumsRouter
