import React from "react";
import "./dashboard.css";
import Tile from "../component/constant/tile";
import MiniCard from "../component/constant/card";
import { KPI } from "../component/constant/kpi";
import BarsPlaceholder from "../component/barChat";
import { TimeToggle } from "../component/timeToggle";
import TopBar from "../component/topBar";
import { gallery } from "../data/gallary";
import { kpiData } from "../data/kpiData";
import { miniStats } from "../data/stats";

export default function Dashboard() {
  return (
    <div className="page">
      <TopBar />

      <main className="content">
        <section className="welcome">
            <h1>Welcome, Ahmed</h1>
        </section>

        <section className="chart-and-kpis">
          <div className="chart-card">
            <div className="chart-header">
              <div className="legend">
                <div>
                  <p className="muted">Sales Overview</p>
                  <p className="muted-slim">Showing overview Jan 2022 - Sep 2022</p>
                </div>
                <div>
                  <TimeToggle />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: ".4rem" }} className="bar-container">
              <button className="tile-cta">▶</button>
              <BarsPlaceholder />
              <button className="tile-cta">▶</button>
              <div className="kpi-grid">
                {kpiData.map((k) => (
                  <KPI
                    key={k.sub}
                    {...k}
                  />
                ))}
              </div>
            </div>
          </div>
          <section className="mini-cards">
            <MiniCard
              title="Listings"
              items={[
                { label: "Total", value: miniStats.listings.total },
                { label: "Active", value: miniStats.listings.active },
                { label: "Archived", value: miniStats.listings.archived },
              ]}
            />
            <MiniCard
              title="Users"
              items={[
                { label: "Total", value: miniStats.users.total },
                { label: "Riders", value: miniStats.users.riders },
                { label: "Subscribers", value: miniStats.users.subscribers },
              ]}
            />

          </section>

        </section>



        <section className="tiles">
          {gallery.map((g) => (
            <Tile key={g.badge} {...g} />
          ))}
        </section>
      </main>
    </div>
  );
}