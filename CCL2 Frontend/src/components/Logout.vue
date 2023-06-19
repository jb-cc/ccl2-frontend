<template>
  <div>
    <strong>Logging out and redirecting...</strong>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "Logout",
  async created() {
    try {
      const response = await http.post("http://localhost:8080/logout");
      if (response.status === 200) {
        this.$router.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>