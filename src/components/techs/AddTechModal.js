import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter a message and a tech' });
    } else {
      addTech({
        firstName: firstname,
        lastName: lastname,
      });
      M.toast({ html: `${firstname} ${lastname} was added tech` });

      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>

        <div className='row'>
          <div className='input-field'>
            <input type='text' name='lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor='lastname' className='active'>
              Last Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input type='text' name='firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor='firstname' className='active'>
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>
          enter
        </a>
      </div>
    </div>
  );
};
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, { addTech })(AddTechModal);
