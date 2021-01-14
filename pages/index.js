import auth0 from "./api/utils/auth0";

export default function Home({ user }) {
  console.log("CSR user", user);

  return (
    <>
      <h1>En la consola podrás ver los datos de tu usuario.</h1>

      <a href="/api/logout">Logout</a>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    return {
      props: {},
      redirect: { destination: "/api/login", permanent: false },
    };
  }

  return { props: { user: session.user } };
}
