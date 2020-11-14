import { createMuiTheme } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';

export const CustomTheme = createMuiTheme({
	palette: {
		primary: pink,
		secondary: indigo,
	},
	status: {
		danger: 'red',
	},
});
