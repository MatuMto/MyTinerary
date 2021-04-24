import CityCard from '../components/CityCard'
import React from 'react'
import axios from 'axios'
import CitiesHeader from '../components/CitiesHeader'
import CitiesFooter from '../components/CitiesFooter'
import LoadingAnimation from '../components/LoadingAnimation'
import citiesActions from '../redux/action/citiesActions'
import {connect} from 'react-redux'

class Cities extends React.Component{

   state = {
      loading: true
   }

   // componentDidMount(){
   //    axios.get('http://localhost:4000/api/cities')
   //    .then(response => this.setState({allCities: response.data.respuesta, loading: false}))
   //    .catch(error => console.log(error))
   // }
   
   componentDidMount(){
      this.props.uploadCities()
      // this.setState({loading: false})
   }
   // console.log(this.props.ciudadesFiltradas)   

   // getFilterValue = (e)=>{
   //    var inputValue = e.target.value
   //    this.setState({filterValue: inputValue.trim()})
   // }


      //  if (this.state.loading) {
      //    return <LoadingAnimation/>
      // }

   renderCities = () => {
      // if (this.state.loading) {
      //    return <LoadingAnimation/>
      // }

      // const filteredCities = this.props.ciudadesFiltradas
      // console.log(filteredCities)
      
      // const filteredCities = []

      // if (this.props.filteredCities.length === 0) {
      //    return <p>I'm sorry, looks like we're having some database problems.. Come back later!</p>
      // }

      // if (this.state.filterValue === '') {
      //    return this.props.filteredCities.map((city) => <CityCard location={city} key={city._id} />)
      // }


      // console.log(this.props)
      // const filteredCities = this.props.citiesFilter(this.props.citiesList)

      // const filteredCities = this.props.citiesList.filter((  {cityName} ) => {
      //    return cityName.toLowerCase().slice(0, this.state.filterValue.length) === this.state.filterValue.toLowerCase()
      // })                                       
      // var nombre = 'matu'
      // nombre.slice(0,2) //ma
      
      // this.props.ciudadesFiltradas.map((city) => {
      //    return <h1>{city.cityName}</h1>
      // })

      // if (filteredCities.length === 0) {
      //    return <div style={{height: '40vh', margin: '10vh auto 0vh auto', borderRadius: '10px', width: '80%', background: `url(/img/fondo-nomatch.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
      //       <p className="no-match-text1">Wow! How did you know? That city is coming very soon!</p>
      //       <p className="no-match-text2">While, you can try searching any other..</p>
      //    </div>
      // }

      // return filteredCities.map((city) => <CityCard location={city} key={city._id} />)
   }

   render(){
      console.log(this.props.ciudadesFiltradas)
      
      return(
         <div style={{background: 'hsla(30, 71%, 84%, 0.842)', display: 'flex', flexDirection: 'column',}}>     
            <CitiesHeader/>
            
            <div className="cities-page-tittle-container">
               <h1 className="citiesPage-tittle">Check out All these options!</h1>   
               <input onChange={(e) => this.props.citiesFilter(e.target.value)} placeholder="Search a City!" className="main-input"  type="text" />
            </div>


            <div style={{display: 'flex', flexWrap: 'wrap', minHeight: '45vh', justifyContent: 'center'}}>
               {/* {this.renderCities} */}
               {this.props.ciudadesFiltradas.length === 0
                  ? <LoadingAnimation/>
                  : this.props.ciudadesFiltradas.map((city) => {
                     return <CityCard location={city} key={city._id} />
               })}
            </div>


            <CitiesFooter/>  
         </div>
         // <>

         //    {/* <button onClick={()=> this.props.uploadCities()} >clickme</button>                */}
         //    {/* {this.props.uploadCities(['Matu', 'Pepe', 'Santy'])} */}
            
         //    {/* {this.props.citiesList.map(city => <h1>{city.country}</h1>)}    */}
         //    {/* {console.log(this.props)} */}
         // </>
      )
   }
}

const mapStateToProps = (state) =>{
   return {
      citiesList: state.cities.allCities,   //citiesList es el nombre con el que yo voy a guardar el dato        
      ciudadesFiltradas: state.cities.citiesFilter
   }
}

const mapDispatchToProps = { //el mapDispatch despacha acciones
   uploadCities: citiesActions.uploadCities,
   citiesFilter: citiesActions.citiesFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)