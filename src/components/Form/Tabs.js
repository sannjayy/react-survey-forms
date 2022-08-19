import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuestionForm from './QuestionForm';
import FormSettings from './FormSettings';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			{...other}
            aria-labelledby={`simple-tab-${index}`}
            id={`simple-tabpanel-${index}`}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography variant={`string`} >{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} centered={true}>
					<Tab label="Questions" {...a11yProps(0)} />
					<Tab label="Settings" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0} style={{padding:0}}>
				<QuestionForm />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<FormSettings />
			</TabPanel>
		</Box>
	);
}
