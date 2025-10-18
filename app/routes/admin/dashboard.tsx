import {Header, StatsCard, TripCard} from "../../../components";
import {dashBoardStats , user , allTrips} from "~/constants";


const { totalUser, userJoined, totalTrips, tripsCreated, userRole } = dashBoardStats
const Dashboard = () => {
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"} 👋`}
                description="Track activity , Trends and popular destination in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUser}
                        currentMonthCount={userJoined.currentMonth}
                        lastMonthCount={userJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>

            <section className="container">
                <div className="trip-grid">
                    {allTrips.slice(0,4).map(({id,name,imageUrls,itinerary,tags,estimatedPrice}) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrl={imageUrls[0]}
                            location={itinerary?.[0]??''}
                            tags={tags}
                            price={estimatedPrice}

                        />
                    ))}
                </div>
            </section>

            <TripCard />
        </main>
    )
}
export default Dashboard;