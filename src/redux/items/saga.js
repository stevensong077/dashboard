import { all, put, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import { toast } from 'react-toastify';
import itemApi from '../../apis/item';

function* getItem(){
    const {success,data,err} =yield itemApi.getItem()
    if (success){
        yield put({type:actions.GET_ITEM_SUCCESS,item:data})
    }else{
        yield put({type:actions.GET_ITEM_FAIL})
        toast.error(err.toString(),{autoClose:2000})
    }
}

export default function* itemSaga(){
    yield all(
        [takeLatest(actions.GET_ITEM),getItem]
    )
}