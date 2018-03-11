import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import propsEnv from '../env/propsEnv';
import { showTabs, selectTab } from '../common/tab/tabActions';

const { BASE_URL } = propsEnv;

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles?sort=month`);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  };
};


export const create = values => (dispatch) => {
  axios.post(`${BASE_URL}/billingCycles`, values)
    .then(() => {
      toastr.success('Sucesso', 'Operação Realizada com sucesso');
      dispatch([
        resetForm('billingCycleForm'),
        getList(),
        selectTab('tabList'),
        showTabs('tabList', 'tabCreate'),
      ]);
    }).catch((e) => {
      e.response.data.errors.forEach((error) => {
        toastr.error('Erro', error);
      });
    });
};

