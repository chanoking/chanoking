with tran_fish_info as (
select id, fish_type, case when length is null then 10 else length end as new_length
from fish_info),
avgs as (
select fish_type, avg(new_length)
from tran_fish_info
group by fish_type
having avg(new_length) >= 33
)

select count(f.fish_type) as fish_count, max(f.length) as max_length, f.fish_type from fish_info as f
inner join avgs as t
on f.fish_type = t.fish_type
group by f.fish_type
order by 3