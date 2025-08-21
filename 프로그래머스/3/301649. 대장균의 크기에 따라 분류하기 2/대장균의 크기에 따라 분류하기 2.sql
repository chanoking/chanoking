select B.id, case 
when B.percentile >= 0 and B.percentile <= 0.25 then 'CRITICAL'
when B.percentile > 0.25 and B.percentile <= 0.5 then 'HIGH'
when B.percentile > 0.5 and B.percentile <= 0.75 then 'MEDIUM'
else  "LOW" end as COLONY_NAME
from (select id, ranks / cnt as percentile from (select id, rank() over (order by size_of_colony desc) as ranks, count(*) over() as cnt from ecoli_data) as A) as B
order by b.id