import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import propsEnv from '../env/propsEnv';
import { showTabs, selectTab } from '../common/tab/tabActions';

const { BASE_URL } = propsEnv;
const INITIAL_VALUES = {};

export const init = () =>
  [showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    initialize('billingCycleForm', INITIAL_VALUES)];

const submit = (values, method) => (dispatch) => {
  const id = values._id ? values._id : '';
  axios[method](`${BASE_URL}/billingCycles/${id}`, values)
    .then(() => {
      toastr.success('Sucesso', 'Operação Realizada com sucesso');
      dispatch(init());
    }).catch((e) => {
      e.response.data.errors.forEach((error) => {
        toastr.error('Erro', error);
      });
    });
};

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles?sort=month`);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  };
};

export const create = values => submit(values, 'post');

export const update = values => submit(values, 'put');

export const remove = values => submit(values, 'delete');

export const showUpdate = billingCycle =>
  [showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)];

export const showDelete = billingCycle =>
  [showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)];
