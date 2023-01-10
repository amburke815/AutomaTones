# AutomaTones - A _FA Music Generator
## Usage for CS3800:
<ul>
  <li>Use <code>new DeterministicFiniteAutomaton</code>( $Q, \Sigma, \delta, q_0, F$ ) to create a DFA</li>
  <li>where 
    <ul> 
      <li>$Q$ is the set of states, as a <code>[FAState]</code></li>
      <li>$\Sigma$ is the input alphabet, as a <code>[string]</code></li>
      <li>$\delta$ is the transition function, as a <code>Map&lt;[FAState, string], FAState&gt;</code> to mirror the $Q \times \Sigma \rightarrow Q$ signature</li>
      <li>$q_0$ is the initial state, as a <codE>[FAState]</code></li>
      <li>$F$ is the set of accept states, as a <code>[FAState]</code></li>
    </ul>
  </li>
  <li> Let <code>d</code> be an instance of a <code>DeterminsticFiniteAutomaton</code>. Then
    <ul>
      <li><code>d.compute(w)</code> computes the state $q \in Q$ that the machine <code>d</code> returns on input <code>string</code> $w$ </li>
      <li><code>d.accepts(w)</code> returns <code>true</code> if the machine <code>d</code> accepts the input <code>string</code> $w$. In other words, is <code>d.compute(w)</code> $\in F$? </li>
    </ul>
  </li>
</ul>
