import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function Table() {
  const sales = [
    { month: "Jan", contract: "5", earning: "7854" },
    { month: "Feb", contract: "4", earning: "4578" },
    { month: "Mar", contract: "2", earning: "4254" },
    { month: "Apr", contract: "7", earning: "2542" },
    { month: "May", contract: "5", earning: "4475" },
  ];
  const renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.month}</td>
        <td>{player.contract}</td>
        <td>{player.earning}</td>
      </tr>
    );
  };

  return (
    <div>
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Month</th>
            <th>Contract</th>
            <th>Earning</th>
          </tr>
        </thead>
        <tbody>{sales.map(renderPlayer)}</tbody>
      </ReactBootstrap.Table>
    </div>
  );
}
