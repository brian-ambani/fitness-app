import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      // const exerciseData = await fetchData();
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relatve" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFFFFF",
            borderRadius: "40px",
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absoulute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
