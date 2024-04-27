import { roleSeedDatabase } from "./RoleSeeder";
import { userSeedDatabase } from "./UserSeeder";
import { courtSeedDatabase } from "./CourtSeeder";
import { matchSeedDatabase } from "./MatchSeeder";
import { userMatchSeedDatabase } from "./UserMatchSeeder";

const launchSeeders = async () => {
    await roleSeedDatabase();
    await userSeedDatabase();
    await courtSeedDatabase();
    await matchSeedDatabase();
    await userMatchSeedDatabase();
}

launchSeeders();