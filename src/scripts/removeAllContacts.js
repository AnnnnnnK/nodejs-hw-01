// import { readContacts } from '../utils/readContacts.js';?
import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]');
  } catch (error) {
    console.log('Error:', error);
  }
};

removeAllContacts();
