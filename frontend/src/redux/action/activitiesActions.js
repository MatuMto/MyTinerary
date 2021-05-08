import axios from 'axios'

const activitiesActions = {
   getItineraryActivities: (id) => {
      return async(dispatch, getState) => {
         const response = await axios.get('http://localhost:4000/api/activities/' + id)
         return response.data.response
      }
   }
}

export default activitiesActions 