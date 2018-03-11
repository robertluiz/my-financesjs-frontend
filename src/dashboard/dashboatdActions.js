import axios from 'axios';
import propsEnv from '../env/propsEnv';


export default function getSummary() {
  const request = axios.get(`${propsEnv.BASE_URL}/billingCycles/summary`);
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request,
  };
}
