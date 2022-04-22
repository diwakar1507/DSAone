const Job = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Job Sequencing Problem
      </div>
      <div className="text-2xl py-5 text-yellow-100">Problem Statement</div>
      In job sequencing problem, the objective is to find a sequence of jobs,
      which is completed within their deadlines and gives maximum profit.
      <div className="text-2xl py-5 text-yellow-100">Solution</div>
      Let us consider, a set of n given jobs which are associated with deadlines
      and profit is earned, if a job is completed by its deadline.These jobs
      need to be ordered in such a way that there is maximum profit.
      <br />
      It may happen that all of the given jobs may not be completed within their
      deadlines.
      <br />
      Assume, deadline of ith job Ji is di and the profit received from this job
      is pi.Hence, the optimal solution of this algorithm is a feasible solution
      with maximum profit.
      <br />
      Thus, D(i) {">"} 0 for 1⩽i⩽n.
      <br />
      Initially, these jobs are ordered according to profit, i.e.p1⩾p2⩾p3⩾...⩾pn
      <div className="text-2xl py-5 text-yellow-100">Analysis</div>
      In this algorithm, we are using two loops, one is within another. Hence,
      the complexity of this algorithm is O(n2).
      <div className="text-2xl py-5 text-yellow-100">Example</div>
      Let us consider a set of given jobs as shown in the following table. We
      have to find a sequence of jobs, which will be completed within their
      deadlines and will give maximum profit. Each job is associated with a
      deadline and profit.
      <div className="text-2xl py-5 text-yellow-100">Solution</div>
      To solve this problem, the given jobs are sorted according to their profit
      in a descending order. Hence, after sorting, the jobs are ordered as shown
      in the following table.
      <br />
      From this set of jobs, first we select J2, as it can be completed within
      its deadline and contributes maximum profit.
      <div className="pl-6 py-5">
        <li>Next, J1 is selected as it gives more profit compared to J4.</li>
        <li>
          In the next clock, J4 cannot be selected as its deadline is over,
          hence J3 is selected as it executes within its deadline.
        </li>
        <li>
          The job J5 is discarded as it cannot be executed within its deadline.
        </li>
      </div>
      Thus, the solution is the sequence of jobs (J2, J1, J3), which are being
      executed within their deadline and gives maximum profit.
      <br />
      Total profit of this sequence is 100 + 60 + 20 = 180.
    </div>
  );
};

export default Job;
