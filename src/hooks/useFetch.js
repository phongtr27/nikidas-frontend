import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => toast.error("Internal Server Error."));
	}, [url]);

	return { data };
};

export default useFetch;
