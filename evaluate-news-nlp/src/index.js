import './styles/base.scss';
import './styles/form.scss';
import './styles/header.scss';

import { handleSubmit } from './js/formHandler';

document.getElementById('form').addEventListener('submit', handleSubmit);
