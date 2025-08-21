select 
case
when (skill_code & (select sum(code) from skillcodes where category like 'front%')) and skill_code & (select code from skillcodes where name = 'python') then 'A'
when skill_code & (select code from skillcodes where name = 'c#') then 'B'
when skill_code & (select sum(code) from skillcodes where category like 'front%') then 'C'
else null
end as grade, id, email
from developers
group by grade, id, email
having grade is not null
order by grade, id