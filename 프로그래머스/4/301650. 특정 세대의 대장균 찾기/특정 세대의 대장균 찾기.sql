WITH RECURSIVE hierarchy AS (
    -- 1단계: 루트 노드 찾기
    SELECT ID, PARENT_ID, 0 AS depth
    FROM ECOLI_DATA
    WHERE PARENT_ID IS NULL

    UNION ALL

    -- 이후 단계: 부모 ID를 가진 자식 찾기
    SELECT e.ID, e.PARENT_ID, h.depth + 1
    FROM ECOLI_DATA AS e
    INNER JOIN hierarchy AS h
        ON e.PARENT_ID = h.ID
        -- 여기서 깊이 제한 가능 (당신 쿼리는 2단계까지만)
        WHERE h.depth < 2
)
SELECT ID
FROM hierarchy
WHERE DEPTH = 2
ORDER BY ID;