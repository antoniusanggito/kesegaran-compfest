## Compfest Software Engineering Task

### Getting Started

This boilerplate includes:

- `/graphql/` - this folder is to define your Queries/Mutations (pro tip: copy the Query/Mutation from your `GraphiQL` to avoid errors)
- `npm run gen` or `yarn gen` to generate the types from the Query/Mutation (or you can just use `npm dev` or `yarn dev` as it also runs this command first)

Prerequisites

1. Rename `.env.local.example` to `.env.local`

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Figma Link

https://www.figma.com/file/ktcQtnVkoxhcQehRgM8b6i/Tugas-Oprec?node-id=1%3A568

### Boilerplate UI

![mEmEs](./static/index.png)

### Data dari API
Haloo para Software Engineer COMPFEST!
Nah, kita pake library codegen, namanya graphql-codegen-generator!
Graphql codegen generator ini bakal ngebuat <i>Hooks</i>(semacam useState, useEffect, dll), biar kamu bisa langsung make datanya dengan satu panggilan <i>Hooks</i> itu!

Saat kamu npm start, kamu bisa lihat di generated/graphql.tsx itu ada useMemesQuery(), nah itu adalah hasil dari npm start, yang membuat <i>Hooks</i> berdasarkan apa yang diberikan di graphql/memes.graphql!

Lalu, kamu lihat di components/Memes.tsx, ada pemanggilannya, dimana dilakukan const { data } = useMemesQuery(), yang berarti <i>destructuring</i> terhadap query yang dilakukan.

Dari situ, udah deh, datanya udah masuk, dan kamu bisa memakai data hasil query itu! 

### Schema
Untuk how graphql works, dia works through schema.
Nah, schema itu apa sih?
Schema itu adalah intinya adalah kayak lembaran yang isinya hal-hal yang bisa diakses user, programmer kayak lo, calon Software Engineer COMPFEST!

Nah, dengan Schema ini, kamu bisa melakukan banyak hal, yang paling utama adalah Query dan Mutation.
Query adalah "mengambil" data dari schema yang diberikan, dan Mutation adalah melakukan "perubahan" terhadap kumpulan data yang ada.

### Fitur Search
Kamu bisa lihat di graphql/memes.graphql, ada line berikut:
```
query Memes{
    memes{
        title
        image_url
        description
    }
}
```

Jika kita bedah, ini berarti kita meminta: "Tolong query skema bernama memes, yang memiliki attribute title, image_url, dan description, dong!"
Nah, melalui codegen, kamu bisa membuat request ini sesuka kamu.

Untuk fitur search, coba cari sendiri untuk keyword "where", ya!!

### Fitur Save
Untuk mutasi, berarti adalah melakukan perubahan dalam backend, atau kamu ingin memakai local storage!
Jikalau kamu ingin melakukan perubahan pada backend, lakukan step-step berikut:
- Akses https://graphiql-online.com/
- Masukkan https://www.oprec-backend.compfest.id/v1/graphiql/ di GRAPHQL ENDPOINT
- Masukkan di tab "Request Headers" sebagai berikut: Key berisi Authorization, dan Value pairnya adalah Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlpDUzM2TlRmRTY0OWNySk9EY2NDbldWVEg4UmduUjRDaUhURnFydzlUTTAifQ.eyJleHAiOjE2MTU2NDg1OTAsImlhdCI6MTYxNDQzODk5MCwic3ViIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS11c2VyLWlkIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhcHBsaWNhbnQiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYXBwbGljYW50In19.GttBtNbVqCEMA2kJkFs1o_Sq_SUqLA9YRHqRYLm-o0pHuvLIM448tl36pnpy42NQet9grBfKeR-wTORgZXBpAfegGEcJi5fJnjP75ZuSvuhl8ekjme313Hu-Z1av9m3s6C0dR6opUtYJ6UVtsIHrotb3SEIzFOEIWcy_pcAQHSgmi30c6mK2k79u7Ey7HjKOnGB-e8QuCLueFmYXgSUSxsxRobDFMp43Q3qx-FLHFYOslDxsdMLXzOGj7KPM2NEX9Ts35W05CuVafjyWcpjEzxBGpoAR6RSc4kU-rehOzsmim0t7VoeVTqYzzCF1fOrWxoKuPJqB_qFQYICsVg8rvBnSM-fIFMc6hTddIpn56V2A9MhGLblLl9FR05qlfQwBp13O2kRckML7CBBJugzonuaG0lmA37J6IE3GKwzRhdDwO-rhgmZfD20ydQHv5pBUwUf6OrAEs8629eBNrq_RrEXpQimzy-_2mxbpcRamgR-CQhq2XydB6ew84oowezpMBZEC-aWWUdGaWJaFiP-bcR6j7eUhTgchWNJM7N0m4k349IgMS1ii_G-JFhkP3-YbYMfLjj3LR2-MnLbtX8w1XkikElqTKfrsK5udFQvJ8MJ9iWnaLo_Ti1cP-aUXZum-G5Be3foJd33p_N8jnXa8KQs-_My0LHZiHQx46Zix27M
- Nanti, akan ter-generate schema dari GRAPHQL, dan disitu kamu bisa mengeksplor mengenai mutasi

Feel free to ask questions yaa!


want to ask? contact us through line id: <br>
jojonicholas
or
marockat
