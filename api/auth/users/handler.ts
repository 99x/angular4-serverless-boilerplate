import { v4 as UUID } from 'uuid';

export const list = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      users: [
        {
          id: UUID(),
          name: 'Ashan Fernando',
          email: 'ashanf@99x.lk'

        }, {
          id: UUID(),
          name: 'Indika Rathnasekara',
          email: 'indikar@99x.lk'
        }
      ]
      //,
      //input: event,
    }),
  };
  cb(null, response);
}
