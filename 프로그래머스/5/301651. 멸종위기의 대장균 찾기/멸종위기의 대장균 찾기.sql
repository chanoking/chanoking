with recursive hierarchy as 
(select id, parent_id, 1 as generation from ecoli_data where parent_id is null
union all
 
 select e.id, e.parent_id, h.generation + 1
 from ecoli_data as e
 inner join hierarchy as h
 on e.parent_id = h.id
)

select count(h.generation) as count, h.generation from hierarchy as h
where h.id not in
(select ec.id from ecoli_data as ec 
inner join 
(select e.parent_id from ecoli_data as e) as ecoli
on ec.id = ecoli.parent_id
group by ec.id)
group by h.generation
order by h.generation