import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { ImagesCarousel } from "@components";
import { EDIT_POI_BY_ID } from "@mutations";
import { GET_POI_BY_ID, GET_ALL_CITIES, GET_ALL_CATEGORIES } from "@queries";
import { mainTheme } from "@theme";
import { CategoryType, CityInput, POIInput } from "@types";
import { useAuth } from "context";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const EditPoiByID = () => {
	// const { isAuthenticated } = useAuth();
	const router = useRouter();
    const id = router.query.id;

	const {
		data: poiData,
		error: poiError,
		loading: poiLoading,
	} = useQuery(GET_POI_BY_ID, {
		variables: { id: Number(id) },
	});

	const { data: cityData } = useQuery(GET_ALL_CITIES);
	const { data: categoryData } = useQuery(GET_ALL_CATEGORIES);

	const [editPoi, { data, error, loading }] = useMutation(EDIT_POI_BY_ID);

	const [form, setForm] = useState<POIInput>({
		name: "",
		address: "",
		postalCode: "",
		description: "",
		city: "",
		latitude: 0,
		longitude: 0,
		images: [],
		category: "",
	});

	useEffect(() => {
		if (poiData?.getPoiById) {
			setForm({
				name: poiData.getPoiById.name || "",
				address: poiData.getPoiById.address || "",
				postalCode: poiData.getPoiById.postalCode || "",
				description: poiData.getPoiById.description || "",
				city: poiData.getPoiById.city.id || "",
				latitude: poiData.getPoiById.latitude || 0,
				longitude: poiData.getPoiById.longitude || 0,
				images: poiData.getPoiById.images || "",
				category: poiData.getPoiById.category.id || "",
			});
		}
	}, [poiData]);
console.log(poiData)
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]:
				name === "latitude" || name === "longitude" ? parseFloat(value) : value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await editPoi({
				variables: {
					input: {
						...form,
						latitude: form.latitude,
						longitude: form.longitude,
					},
				},
			});
			toast.success("POI updated successfully");
			router.push(`/poi/${id}`);
		} catch (error) {
			toast.error("Error updating POI");
		}
	};
console.log(poiData)
	// if (poiLoading || !cityData || !categoryData) return <p>Loading...</p>;
	if (poiError) return <p>Error loading POI data</p>;

	return (
		<Box sx={{ padding: "1rem" }}>
			<Grid container spacing={6}>
			
				<Grid item xs={6}>
					<Paper sx={{ padding: "1rem" }}>
						<Typography
							color={mainTheme.palette.primary.main}
							align="center"
							sx={{ fontSize: mainTheme.typography.h3, fontWeight: "bold" }}
						>
							Edit POI
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								fullWidth
								margin="normal"
								label="Nom"
								name="name"
								value={form.name}
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								margin="normal"
								label="Addresse"
								name="address"
								value={form.address}
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								margin="normal"
								label="Code Postal"
								name="postalCode"
								value={form.postalCode}
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								margin="normal"
								label="Description"
								name="description"
								value={form.description}
								onChange={handleChange}
							/>
							<FormControl fullWidth margin="normal">
								<InputLabel id="city-label">City</InputLabel>
								<Select
									labelId="city-label"
									name="city"
									value={form.city}
									onChange={handleChange}
									label="Ville"
								>
									{cityData?.getAllCities.map((city: CityInput) => (
										<MenuItem key={city.id} value={city.id}>
											{city.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<TextField
								fullWidth
								margin="normal"
								label="Latitude"
								name="latitude"
								type="number"
								value={form.latitude}
								onChange={handleChange}
							/>
							<TextField
								fullWidth
								margin="normal"
								label="Longitude"
								name="longitude"
								type="number"
								value={form.longitude}
								onChange={handleChange}
							/>
							<FormControl fullWidth margin="normal">
								<InputLabel id="category-label">Category</InputLabel>
								<Select
									labelId="category-label"
									name="category"
									value={form.category}
									onChange={handleChange}
									label="Catégorie"
								>
									{categoryData?.getAllCategories.map((category: CategoryType) => (
										<MenuItem key={category.id} value={category.id}>
											{category.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<TextField
								fullWidth
								margin="normal"
								label="Images"
								name="images"
								value={form.images}
								onChange={handleChange}
							/>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									marginTop: "1rem",
								}}
							>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									disabled={loading}
								>
									{loading ? "Updating..." : "Modifier"}
								</Button>
							</Box>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default EditPoiByID;
