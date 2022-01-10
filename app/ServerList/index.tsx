import React from "react";
import { useState } from "react";
import ListItem from "components/List/ListItem";
import { Server } from "./types";

const ServerList = () => {
  const [servers, setServers] = useState<Server[] | null>(null);

  if (!servers) {
    return <>No data</>;
  }

  return (
    <ul>
      {servers.length &&
        servers.map((server) => {
          return <ListItem key={server.id} server={server} />;
        })}
    </ul>
  );
};

export default ServerList;
