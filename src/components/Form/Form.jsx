import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    const id = nanoid();
    onSubmit({ id, name, number });
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className={css.input}
            type="tel"
            placeholder="Number"
            name="number"
            value={formData.number.replace(/[^0-9.]/g, '')}
            onChange={handleChange}
            required
          />
        </label>
        <button className={css.formButton}>Add Contact</button>
      </form>
    </div>
  );
};

export default Form;