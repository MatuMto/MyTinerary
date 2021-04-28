import CityCard from '../components/CityCard'
import React from 'react'
import CitiesHeader from '../components/CitiesHeader'
import CitiesFooter from '../components/CitiesFooter'
import citiesActions from '../redux/action/citiesActions'
import {connect} from 'react-redux'
import LoadingAnimation from '../components/LoadingAnimation'

class Cities extends React.Component{

   componentDidMount(){
      this.props.uploadCities()
      // this.setState({loading: false})
   }


   render(){
      return( 
         <div style={{background: 'hsla(30, 71%, 84%, 0.842)', display: 'flex', flexDirection: 'column',}}>               
            <CitiesHeader/>
            
            {/* input */}
            <div className="cities-page-tittle-container">
               <h1 className="citiesPage-tittle">Check out All these options!</h1>   
               <input onChange={(e) => this.props.citiesFilter(e.target.value)} placeholder="Search a City!" className="main-input"  type="text" />
            </div>

            {/* loading animation */}
            {this.props.citiesList.length === 0 
               && <LoadingAnimation/>}

            {/* show cities or noMatch poster */}
            <div style={{display: 'flex', flexWrap: 'wrap', minHeight: '45vh', justifyContent: 'center'}}>
               
               {this.props.ciudadesFiltradas.length > 0
                  ?  this.props.ciudadesFiltradas.map((city) => {
                        return <CityCard location={city} key={city._id} />})    
                  :  <div className="no-match-poster" style={{height: '40vh', margin: '10vh auto 0vh auto', borderRadius: '10px', width: '80%',     background: `url(/img/fondo-nomatch.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
                     <p className="no-match-text1">Wow! How did you know? That city is coming very soon!</p>
                     <p className="no-match-text2">While, you can try searching any other..</p>
               </div>}
            </div>

            <CitiesFooter/>  
         </div>
      )
   }
}

const mapStateToProps = (state) =>{
   return {
      citiesList: state.cities.allCities,   //citiesList es el nombre con el que yo voy a guardar el dato        
      ciudadesFiltradas: state.cities.citiesFilter
   }
}

const mapDispatchToProps = { //el mapDispatch despacha acciones y dsps las ubica por medio de las props
   uploadCities: citiesActions.uploadCities,
   citiesFilter: citiesActions.citiesFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)