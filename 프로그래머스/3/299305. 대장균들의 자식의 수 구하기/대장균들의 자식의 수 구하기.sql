with haveChild as (select count(parent_id), parent_id
from ecoli_data
group by parent_id
having count(parent_id) > 0)

select ecoli.id, 
            case 
            when (select eco.parent_id from ecoli_data as eco where eco.parent_id = ecoli.id group by eco.parent_id) is null then 0
            else (select count(eco.parent_id) from ecoli_data as eco where eco.parent_id = ecoli.id group by eco.parent_id) end as child_count
from ecoli_data as ecoli
order by 1



