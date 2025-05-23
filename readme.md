# 🚗 BochoAmigo API

**BochoAmigo API** es un sistema sencillo y eficiente para el **control de viajes de choferes**. Permite registrar, consultar, modificar y cancelar viajes, facilitando la administración y el monitoreo de los traslados realizados, el pasajero transportado, el destino y la hora de cada viaje.

---

## 📋 Características principales

- **Registro de viajes** para cada chofer, incluyendo destino, hora y pasajero.
- **Consulta** de todos los viajes activos o filtrados por ciudad.
- **Edición** de los datos de un viaje (pasajero, destino, hora, etc.).
- **Cancelación** de viajes, manteniendo el historial completo.
- **API RESTful**: fácil de integrar con paneles web, apps o asistentes de voz (como Alexa).

---

## 🔗 Endpoints

- `GET    /viajes`  
  Consulta todos los viajes activos.

- `GET    /viajes/ciudad/:destino`  
  Consulta viajes activos filtrados por ciudad.

- `POST /viajes`  
  Registra un nuevo viaje.  
  **Body ejemplo:**
  ```json
  {
    "nombre_conductor": "Pedro",
    "destino": "Puebla",
    "hora": "18:00",
    "pasajero": "Luis"
  }

- `PUT /viajes/:id`  
  Actualiza un viaje.  
  **Body ejemplo:**
  ```json
  {
    "pasajero": "Mario",
    "destino": "CDMX",
    "hora": "19:30"
  }