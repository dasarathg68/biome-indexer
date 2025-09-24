/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Stake,
  Stake_AdminUnlocked,
  Stake_AutoRenew,
  Stake_DelegateChanged,
  Stake_DelegateVotesChanged,
  Stake_EIP712DomainChanged,
  Stake_Extend,
  Stake_Initialized,
  Stake_MaxWeeksSet,
  Stake_RoleAdminChanged,
  Stake_RoleGranted,
  Stake_RoleRevoked,
  Stake_Stake,
  Stake_Withdraw,
} from "generated";

Stake.AdminUnlocked.handler(async ({ event, context }) => {
  const entity: Stake_AdminUnlocked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    adminUnlocked: event.params.adminUnlocked,
  };

  context.Stake_AdminUnlocked.set(entity);
});

Stake.AutoRenew.handler(async ({ event, context }) => {
  const entity: Stake_AutoRenew = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    event_id: event.params.id,
    autoRenew: event.params.autoRenew,
  };

  context.Stake_AutoRenew.set(entity);
});

Stake.DelegateChanged.handler(async ({ event, context }) => {
  const entity: Stake_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.Stake_DelegateChanged.set(entity);
});

Stake.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: Stake_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousVotes: event.params.previousVotes,
    newVotes: event.params.newVotes,
  };

  context.Stake_DelegateVotesChanged.set(entity);
});

Stake.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: Stake_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Stake_EIP712DomainChanged.set(entity);
});

Stake.Extend.handler(async ({ event, context }) => {
  const entity: Stake_Extend = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    event_id: event.params.id,
    numWeeks: event.params.numWeeks,
  };

  context.Stake_Extend.set(entity);
});

Stake.Initialized.handler(async ({ event, context }) => {
  const entity: Stake_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Stake_Initialized.set(entity);
});

Stake.MaxWeeksSet.handler(async ({ event, context }) => {
  const entity: Stake_MaxWeeksSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newMaxWeeks: event.params.newMaxWeeks,
    oldMaxWeeks: event.params.oldMaxWeeks,
  };

  context.Stake_MaxWeeksSet.set(entity);
});

Stake.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Stake_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Stake_RoleAdminChanged.set(entity);
});

Stake.RoleGranted.handler(async ({ event, context }) => {
  const entity: Stake_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Stake_RoleGranted.set(entity);
});

Stake.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Stake_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Stake_RoleRevoked.set(entity);
});

Stake.Stake.handler(async ({ event, context }) => {
  const entity: Stake_Stake = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    event_id: event.params.id,
    amount: event.params.amount,
    numWeeks: event.params.numWeeks,
  };

  context.Stake_Stake.set(entity);
});

Stake.Withdraw.handler(async ({ event, context }) => {
  const entity: Stake_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    event_id: event.params.id,
    amount: event.params.amount,
  };

  context.Stake_Withdraw.set(entity);
});
