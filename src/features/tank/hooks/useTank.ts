import { useQuery } from "@tanstack/react-query";
import { Fuel, Tank } from "types";
import { getFuel, getFuels } from "services/fuel";
import { getTank, getTanks } from "services/tank";

export const UseTanks = () => {
	const query = useQuery<Tank[], Error>({
		queryKey: ["tanks"],
		queryFn: () => getTanks()
	});

	return query;
};

export const UseTank = (tankID: string) => {
	const query = useQuery<Tank, Error>({
		queryKey: ["tank", tankID],
		queryFn: () => getTank(tankID),
		enabled: tankID !== ""
	});

	return query;
};
