using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements; // Corrigido o namespace

public class menu : MonoBehaviour
{
    private Button btnPlay;
    private Button btnScore;

    void OnEnable()
    {
        // Pegando a raiz do documento UI
        var root = GetComponent<UIDocument>().rootVisualElement;

        // Pegando o bot�o pela refer�ncia do nome
        btnPlay = root.Q<Button>("btnPlay");
        btnScore = root.Q<Button>("btnScore");

        if (btnScore != null)
        {
            btnScore.clicked += LoadSceneB;
        }
        else
        {
            Debug.LogError("Bot�o btnScore n�o encontrado!");
        }

        if (btnPlay != null)
        {
            btnPlay.clicked += LoadSceneA;
        }
        else
        {
            Debug.LogError("Bot�o btnPlay n�o encontrado!");
        }
    }

    void LoadSceneA()
    {
        SceneManager.LoadScene("a");
    }

    void LoadSceneB()
    {
        SceneManager.LoadScene("ScoreScene");
    }
}
