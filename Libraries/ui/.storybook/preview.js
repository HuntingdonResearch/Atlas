import 'bulma/css/bulma.css';
import 'bulma-social/css/all.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
