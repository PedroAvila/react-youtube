//import { useState } from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";
import "./Formulario.css";
import { useFormik } from "formik";

import * as Yup from "yup";

const Formulario = () => {
  const { handleSubmit, handleChange, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        nombre: "",
        email: "",
        contraseña: "",
      },

      validationSchema: Yup.object({
        nombre: Yup.string().required("Debe ingresar un nombre"),
        email: Yup.string().required("Debe ingresar un email"),
        contraseña: Yup.string().required("Debe ingresar una contraseña"),
      }),

      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Nombre"
              variant="outlined"
              fullWidth
              //name="nombre"
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
              }}
              helperText={errors.nombre}
              value={values.nombre}
              error={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              value={values.email}
              error={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              name="contraseña"
              onChange={handleChange}
              helperText={errors.contraseña}
              value={values.contraseña}
              error={errors.contraseña}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
