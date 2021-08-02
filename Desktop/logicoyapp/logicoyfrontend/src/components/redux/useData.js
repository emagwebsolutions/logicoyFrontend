import axios from 'axios'
import {useDispatch} from 'react-redux'
import {fetchallusers,fetchalldrivers,fetchalltransporters,fetchalljobs} from './actions/actions'

export default function useData(){

        const dispatch = useDispatch()

          /*-------------------------------
          *START GET ALL USERS DATA
          -------------------------------*/
          const UsersDatas = async ()=>{
            try{
              const config = {header:{"Content-Type": "application/json"}}
              const {data} = await axios.get("http://localhost:8080/api/public/users/",config)
              if(data.success === true){
                dispatch(fetchallusers(data.users))
              }
            }
            catch(err){
              console.log(err.message)
            }
          }
      
        /*-------------------------------
        *END GET ALL USERS DATA
        -------------------------------*/

        /*-------------------------------
        *START GET ALL DRIVERS DATA
        -------------------------------*/
        const DriversData = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get("http://localhost:8080/api/public/getdrivers/",config)
            if(data.success === true){
              dispatch(fetchalldrivers(data.drivers))
            }
          }
          catch(err){
            console.log(err.message)
          }
        }

      /*-------------------------------
      *END GET ALL DROVERS DATA
      -------------------------------*/



        /*-------------------------------
        *START GET ALL TRANSPORTERS DATA
        -------------------------------*/
        const TranspData = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get("http://localhost:8080/api/public/gettransporters/",config)
            if(data.success === true){
              dispatch(fetchalltransporters(data.transporters))
            }
          }
          catch(err){
            console.log(err.message)
          }
        }

      /*-------------------------------
      *END GET ALL TRANSPORTERS DATA
      -------------------------------*/


        /*-------------------------------
        *START GET ALL JOBS DATA
        -------------------------------*/
        const JobsData = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get("http://localhost:8080/api/public/getjobs/",config)
            if(data.success === true){
              dispatch(fetchalljobs(data.jobs))
            }
          }
          catch(err){
            console.log(err.message)
          }
        }

      /*-------------------------------
      *END GET ALL JOBS DATA
      -------------------------------*/

    return {UsersDatas,DriversData,TranspData,JobsData}
}





