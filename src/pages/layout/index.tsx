import React, { useState } from "react";
import { Alert, AlertTitle, Box, Snackbar, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { useStateValue } from "state";
import { useTheme } from "@mui/material";

const Layout = () => {
	const theme = useTheme();
	const [state, dispatch] = useStateValue();
	const isNonMobile = useMediaQuery("(min-width: 600px)");
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
			<Snackbar
				open={state.alert?.show}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Alert severity={state.alert?.type}>
					<AlertTitle>{state.alert?.title}</AlertTitle>
					{state.alert?.message}
				</Alert>
			</Snackbar>
			<Sidebar
				user={{}}
				isNonMobile={isNonMobile}
				drawerWidth="250px"
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<Box
				sx={{
					width: { xs: "100%", md: isSidebarOpen ? "80%" : "90%" },
					m: { md: "0 auto" }
				}}
			>
				<Navbar
					isSidebarOpen={isSidebarOpen}
					isNonMobile={isNonMobile}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<Box
					mt="5rem"
					sx={{
						backgroundColor: theme.palette.background.alt,
						boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"
					}}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
};

export default Layout;
