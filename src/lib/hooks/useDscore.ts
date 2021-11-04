
export function UseDscore () {

    const _stakeMember = (_stakeAmount: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.stakeMeber(_stakeAmount).then((txr: any) => {
            //     let _tx = txr.wait(1);
            //     console.log(_tx, 'staked member')
            // }).catch((err: any) => {
            //     console.log(err, 'Failed line 10 useDscore Hook')
            // })
        // }
    }

    // ** @dev _factors =
    //  0 - Level: a members level is determined by the DecentraCorp community as a way of rewarding members for non
    //   D-job related tasks such as a technical task, community service, or other work related reward.
    //   1 - Jobs: the number of completed jobs done by the member.
    //   2 - Votes: the number of DecentraCorp votes the member has participated in.
    //   3 - Reputation: the overall average of the rating of each job performed.
    //   4 - Staked: the number of DercentraStock a member has staked
    //   5 - Verified: number of times this member has been audited by other members
    //   6 - Audit: number of other members this account has audited
    const _increaseScore = (_member: any, _factor: any, _amount: any) => {
         // if(contracts.isJust()) {
        // contracts.value.D.increaseDScore(_member,factor,amount).then((txr: any) => {
            //     let _tx = txr.wait(1);
            //     console.log(_tx, 'line 50 useDscore Hook tx Successful')
            // }).catch((err: any) => {
            //     console.log(err, 'Failed line 30 useDscore Hook')
            // })
        // }
    }

    const _calculateVotingPower = (_member: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.calculateVotingPower(_member).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 39 useDscore Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 41 useDscore Hook')
        // })
        // }
    }

    const _stakeCheck = (_member: any) => {
 // if(contracts.isJust()) {
        // contracts.value.D.stakeCheck(_member).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 50 useDscore Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 52 useDscore Hook')
        // })
        // }
    }

    return {_stakeMember, _increaseScore, _calculateVotingPower, _stakeCheck}
}