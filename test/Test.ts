import assert from "assert";
import { 
  TestHelpers,
  Stake_AdminUnlocked
} from "generated";
const { MockDb, Stake } = TestHelpers;

describe("Stake contract AdminUnlocked event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Stake contract AdminUnlocked event
  const event = Stake.AdminUnlocked.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Stake_AdminUnlocked is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Stake.AdminUnlocked.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStakeAdminUnlocked = mockDbUpdated.entities.Stake_AdminUnlocked.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStakeAdminUnlocked: Stake_AdminUnlocked = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      adminUnlocked: event.params.adminUnlocked,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStakeAdminUnlocked, expectedStakeAdminUnlocked, "Actual StakeAdminUnlocked should be the same as the expectedStakeAdminUnlocked");
  });
});
