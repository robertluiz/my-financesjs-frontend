import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={labelAndInput}
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={labelAndInput}
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano"
            type="number"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.decbutton}</button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >Cancelar
          </button>
        </div>
      </form>
    );
  }
}
const billingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(billingCycleForm);

