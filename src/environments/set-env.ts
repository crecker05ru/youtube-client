const setEnv = () => {
  const fs = require('fs');
  const { writeFile } = fs;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  apiKey: '${process.env['GOOGLE_API_KEY']}',
  apiUrl: '${process.env['API_URL']}',
  appVersion: '${appVersion}',
  production: true,
};
`;
  console.log('The file `environment.ts` will be written with the following content: \n');
  writeFile(targetPath, envConfigFile, (err: undefined | never) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
  });
};

setEnv();
