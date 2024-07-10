import { Grid } from "@mui/material";
import { ArthurCurriculum } from "../cv";

export const Home = () => {
  return (
    <Grid container spacing={2} padding={4} flexDirection="row">
      <Grid
        container
        item
        xs={12}
        minHeight="50vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ArthurCurriculum />
      </Grid>
    </Grid>
  );
};
