import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Table from '../../elements/Table';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Table,
  title: 'Elements/Table'
};

export const Simple = () => (
  <Shell fluid>
    <Table>
      <Table.Head>
      <Table.Row>
        <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
        <Table.Heading>Team</Table.Heading>
        <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
        <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
        <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
        <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
        <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
        <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
        <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
        <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
        <Table.Heading>Qualification or relegation</Table.Heading>
      </Table.Row>
      </Table.Head>
      <Table.Foot>
      <Table.Row>
        <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
        <Table.Heading>Team</Table.Heading>
        <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
        <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
        <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
        <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
        <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
        <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
        <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
        <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
        <Table.Heading>Qualification or relegation</Table.Heading>
      </Table.Row>
      </Table.Foot>
      <Table.Body>
      <Table.Row>
        <Table.Heading>1</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
          <strong>(C)</strong>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>23</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>3</Table.Column>
        <Table.Column>68</Table.Column>
        <Table.Column>36</Table.Column>
        <Table.Column>+32</Table.Column>
        <Table.Column>81</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>2</Table.Heading>
        <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>20</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>7</Table.Column>
        <Table.Column>65</Table.Column>
        <Table.Column>36</Table.Column>
        <Table.Column>+29</Table.Column>
        <Table.Column>71</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>3</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>19</Table.Column>
        <Table.Column>13</Table.Column>
        <Table.Column>6</Table.Column>
        <Table.Column>69</Table.Column>
        <Table.Column>35</Table.Column>
        <Table.Column>+34</Table.Column>
        <Table.Column>70</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
        </Table.Column>
      </Table.Row>
      <Table.Row className="is-selected">
        <Table.Heading>4</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>19</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>10</Table.Column>
        <Table.Column>71</Table.Column>
        <Table.Column>41</Table.Column>
        <Table.Column>+30</Table.Column>
        <Table.Column>66</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>5</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>19</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>10</Table.Column>
        <Table.Column>49</Table.Column>
        <Table.Column>35</Table.Column>
        <Table.Column>+14</Table.Column>
        <Table.Column>66</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>6</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>18</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>59</Table.Column>
        <Table.Column>41</Table.Column>
        <Table.Column>+18</Table.Column>
        <Table.Column>63</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>7</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>16</Table.Column>
        <Table.Column>14</Table.Column>
        <Table.Column>8</Table.Column>
        <Table.Column>65</Table.Column>
        <Table.Column>51</Table.Column>
        <Table.Column>+14</Table.Column>
        <Table.Column>62</Table.Column>
        <Table.Column>
          Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>8</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>16</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>10</Table.Column>
        <Table.Column>63</Table.Column>
        <Table.Column>50</Table.Column>
        <Table.Column>+13</Table.Column>
        <Table.Column>60</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>9</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>14</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>15</Table.Column>
        <Table.Column>41</Table.Column>
        <Table.Column>55</Table.Column>
        <Table.Column>−14</Table.Column>
        <Table.Column>51</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>10</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>14</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>59</Table.Column>
        <Table.Column>53</Table.Column>
        <Table.Column>+6</Table.Column>
        <Table.Column>50</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>11</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>14</Table.Column>
        <Table.Column>13</Table.Column>
        <Table.Column>59</Table.Column>
        <Table.Column>55</Table.Column>
        <Table.Column>+4</Table.Column>
        <Table.Column>47</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>12</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>15</Table.Column>
        <Table.Column>42</Table.Column>
        <Table.Column>52</Table.Column>
        <Table.Column>−10</Table.Column>
        <Table.Column>47</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>13</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>17</Table.Column>
        <Table.Column>40</Table.Column>
        <Table.Column>50</Table.Column>
        <Table.Column>−10</Table.Column>
        <Table.Column>45</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>14</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>10</Table.Column>
        <Table.Column>13</Table.Column>
        <Table.Column>15</Table.Column>
        <Table.Column>34</Table.Column>
        <Table.Column>48</Table.Column>
        <Table.Column>−14</Table.Column>
        <Table.Column>43</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>15</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>18</Table.Column>
        <Table.Column>39</Table.Column>
        <Table.Column>51</Table.Column>
        <Table.Column>−12</Table.Column>
        <Table.Column>42</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>16</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>11</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>18</Table.Column>
        <Table.Column>45</Table.Column>
        <Table.Column>67</Table.Column>
        <Table.Column>−22</Table.Column>
        <Table.Column>42</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>17</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>12</Table.Column>
        <Table.Column>17</Table.Column>
        <Table.Column>48</Table.Column>
        <Table.Column>62</Table.Column>
        <Table.Column>−14</Table.Column>
        <Table.Column>39</Table.Column>
        <Table.Column/>
      </Table.Row>
      <Table.Row>
        <Table.Heading>18</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>10</Table.Column>
        <Table.Column>19</Table.Column>
        <Table.Column>44</Table.Column>
        <Table.Column>65</Table.Column>
        <Table.Column>−21</Table.Column>
        <Table.Column>37</Table.Column>
        <Table.Column>
          Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>19</Table.Heading>
        <Table.Column>
          <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>9</Table.Column>
        <Table.Column>7</Table.Column>
        <Table.Column>22</Table.Column>
        <Table.Column>39</Table.Column>
        <Table.Column>67</Table.Column>
        <Table.Column>−28</Table.Column>
        <Table.Column>34</Table.Column>
        <Table.Column>
          Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Heading>20</Table.Heading>
        <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
          <strong>(R)</strong>
        </Table.Column>
        <Table.Column>38</Table.Column>
        <Table.Column>3</Table.Column>
        <Table.Column>8</Table.Column>
        <Table.Column>27</Table.Column>
        <Table.Column>27</Table.Column>
        <Table.Column>76</Table.Column>
        <Table.Column>−49</Table.Column>
        <Table.Column>17</Table.Column>
        <Table.Column>
          Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
        </Table.Column>
      </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Bordered = () => (
  <Shell fluid>
    <Table bordered>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Striped = () => (
  <Shell fluid>
    <Table striped>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Hoverable = () => (
  <Shell fluid>
    <Table hoverable>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Scrollable = () => (
  <Shell fluid>
    <Table scrollable>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Narrow = () => (
  <Shell fluid>
    <Table narrow>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const FullWidth = () => (
  <Shell fluid>
    <Table fullwidth>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

export const Fancy = () => (
  <Shell fluid>
    <Table bordered striped hoverable scrollable narrow fullwidth>
      <Table.Head>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Foot>
        <Table.Row>
          <Table.Heading><abbr title="Position">Pos</abbr></Table.Heading>
          <Table.Heading>Team</Table.Heading>
          <Table.Heading><abbr title="Played">Pld</abbr></Table.Heading>
          <Table.Heading><abbr title="Won">W</abbr></Table.Heading>
          <Table.Heading><abbr title="Drawn">D</abbr></Table.Heading>
          <Table.Heading><abbr title="Lost">L</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals for">GF</abbr></Table.Heading>
          <Table.Heading><abbr title="Goals against">GA</abbr></Table.Heading>
          <Table.Heading><abbr title="Goal difference">GD</abbr></Table.Heading>
          <Table.Heading><abbr title="Points">Pts</abbr></Table.Heading>
          <Table.Heading>Qualification or relegation</Table.Heading>
        </Table.Row>
      </Table.Foot>
      <Table.Body>
        <Table.Row>
          <Table.Heading>1</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
            <strong>(C)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>23</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>68</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+32</Table.Column>
          <Table.Column>81</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>2</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>20</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>36</Table.Column>
          <Table.Column>+29</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>3</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>6</Table.Column>
          <Table.Column>69</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+34</Table.Column>
          <Table.Column>70</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row className="is-selected">
          <Table.Heading>4</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>71</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+30</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>5</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>49</Table.Column>
          <Table.Column>35</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>66</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>6</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>+18</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>7</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>+14</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>
            Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>8</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>16</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>63</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>+13</Table.Column>
          <Table.Column>60</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>9</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>41</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>10</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>53</Table.Column>
          <Table.Column>+6</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>11</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>14</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>59</Table.Column>
          <Table.Column>55</Table.Column>
          <Table.Column>+4</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>12</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column>52</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>47</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>13</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>40</Table.Column>
          <Table.Column>50</Table.Column>
          <Table.Column>−10</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>14</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>13</Table.Column>
          <Table.Column>15</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>43</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>15</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>51</Table.Column>
          <Table.Column>−12</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>16</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>11</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>18</Table.Column>
          <Table.Column>45</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−22</Table.Column>
          <Table.Column>42</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>17</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>12</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>48</Table.Column>
          <Table.Column>62</Table.Column>
          <Table.Column>−14</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column/>
        </Table.Row>
        <Table.Row>
          <Table.Heading>18</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>10</Table.Column>
          <Table.Column>19</Table.Column>
          <Table.Column>44</Table.Column>
          <Table.Column>65</Table.Column>
          <Table.Column>−21</Table.Column>
          <Table.Column>37</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>19</Table.Heading>
          <Table.Column>
            <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a><strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>9</Table.Column>
          <Table.Column>7</Table.Column>
          <Table.Column>22</Table.Column>
          <Table.Column>39</Table.Column>
          <Table.Column>67</Table.Column>
          <Table.Column>−28</Table.Column>
          <Table.Column>34</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
        <Table.Row>
          <Table.Heading>20</Table.Heading>
          <Table.Column><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
            <strong>(R)</strong>
          </Table.Column>
          <Table.Column>38</Table.Column>
          <Table.Column>3</Table.Column>
          <Table.Column>8</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>27</Table.Column>
          <Table.Column>76</Table.Column>
          <Table.Column>−49</Table.Column>
          <Table.Column>17</Table.Column>
          <Table.Column>
            Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a>
          </Table.Column>
        </Table.Row>
      </Table.Body>
    </Table>
  </Shell>
);

function Shell({ children, fluid = false }: { children: ReactNode, fluid?: boolean }) {
  return (
    <Container fluid={fluid}>
      <Columns centered>
        <Column size="two-thirds">
          <Content>
            {children}
          </Content>
        </Column>
      </Columns>
    </Container>
  );
}
