import{
    GET_USER_FAILURE,
    GET_USER_SUCCESS
} from './Type';
const initialState = {
    isGetListSuceess:false,
    isGetListEror:false,
    ListUser:{}
}
export default function reducer (state = initialState, action)
{
    switch (action.type) {
        case GET_USER_SUCCESS:
          return {
              ...state,
              ListUser:action.payload,
              isGetListSuceess:true,
              isGetListEror:false,
          };
          case GET_USER_SUCCESS:
            return {
                ...state,
                ListUser:{},
                isGetListSuceess:false,
                isGetListEror:true,
            };
            default:
                return state;
}}